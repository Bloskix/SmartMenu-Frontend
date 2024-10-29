import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Button from '../components/Button';
import AddButton from '../components/AddButton';
import apiClient from '../api/apiClient';

const AddMeal = ({ navigation }) => {
    const [mealName, setMealName] = useState('');
    const [mealType, setMealType] = useState('');
    const [prepTime, setPrepTime] = useState('');
    const [ingredients, setIngredients] = useState([{ name: '', quantity: '' }]);

    const handleIngredientChange = (index, key, value) => {
        const updatedIngredients = [...ingredients];
        updatedIngredients[index][key] = value;
        setIngredients(updatedIngredients);
    };

    const addIngredient = () => {
        setIngredients([...ingredients, { name: '', quantity: '' }]);
    };

    const removeIngredient = (index) => {
        const updatedIngredients = ingredients.filter((_, i) => i !== index);
        setIngredients(updatedIngredients);
    };

    const handleCreateMeal = async () => {
        try {
            await apiClient.post('/meals', {
                name: mealName,
                type: mealType,
                prepTime: prepTime,
                ingredients: ingredients,
            });
            navigation.goBack();
        } catch (error) {
            console.error("Error creating meal:", error);
        }
    };

    return (
        <KeyboardAwareScrollView
            contentContainerStyle={styles.container}
            enableOnAndroid={true}
            extraScrollHeight={20}
        >
            <Text style={styles.title}>Add new meal</Text>
            <Text style={styles.label}>Meal name</Text>
            <TextInput style={styles.input} value={mealName} onChangeText={setMealName} />

            <Text style={styles.label}>Meal type</Text>
            <TextInput style={styles.input} value={mealType} onChangeText={setMealType} />

            <Text style={styles.label}>Preparation time (minutes)</Text>
            <TextInput style={styles.input} value={prepTime} onChangeText={setPrepTime} keyboardType="numeric" />

            <Text style={styles.label}>Ingredients (grams)</Text>
            {ingredients.map((ingredient, index) => (
                <View key={index} style={styles.ingredientRow}>
                    <TextInput
                        placeholder="Ingredient name"
                        style={styles.ingredientInput}
                        value={ingredient.name}
                        onChangeText={(text) => handleIngredientChange(index, 'name', text)}
                    />
                    <TextInput
                        placeholder="Qty"
                        style={styles.quantityInput}
                        keyboardType="numeric"
                        value={ingredient.quantity}
                        onChangeText={(text) => handleIngredientChange(index, 'quantity', text)}
                    />
                    <TouchableOpacity onPress={() => removeIngredient(index)}>
                        <Ionicons name="remove-circle" size={24} color="red" />
                    </TouchableOpacity>
                </View>
            ))}
            <AddButton onPress={addIngredient} />

            <Button title="Create meal" onPress={handleCreateMeal} />
        </KeyboardAwareScrollView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f8f8f8',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    label: {
        fontSize: 18,
        marginTop: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginTop: 5,
        borderRadius: 5,
    },
    ingredientsContainer: {
        maxHeight: 200, // Establece una altura máxima para el scroll
        marginVertical: 10,
    },
    ingredientRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    ingredientInput: {
        flex: 2,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginRight: 5,
    },
    quantityInput: {
        flex: 1,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
});

export default AddMeal;
