import { View, Text,Modal,TouchableOpacity,ScrollView,TextInput,Modal } from 'react-native';
import {Ionicons} from "@expo/vector-icons";
import {useState} from "react";
import {useFilterStore,Property} from '../../'
import {formatPrice} from "../lib/utils";
import React from 'react'




const TYPES:{label:string;values:PropertyType}[]=[
    {label:"All",value:null},
    {label:"Apartment",value:"apartment"},
    {label:"House",value:"house"},
    {label:"Villa",value:"villa"},
    {label:"Studio",value:"studio"},
];

const BEDS = [
    { label: "Any", value: null },
    { label: "1", value: 1 },
    { label: "2", value: 2 },
    { label: "3", value: 3 },
    { label: "4+", value: 4 },
  ];
  
  const PRICE_PRESETS = [
    { label: "Under ₹50L", min: null, max: 5000000 },
    { label: "₹50L – ₹1Cr", min: 5000000, max: 10000000 },
    { label: "₹1Cr – ₹2Cr", min: 10000000, max: 20000000 },
    { label: "Above ₹2Cr", min: 20000000, max: null },
  ];
  



export default function FilterModal({
    visible,
    onClose,
}:{
visible:boolean;
onClose:()=>void;
}){
    const{
        type,
        bedrooms,
        minPrice,
        maxPrice,
        setType,
        setBedrooms,
        setMinPrice,
        setMaxPrice,
        resetFilters,
    }=useFilterStore();

    const [localMin,setLocalMin]=useState(minPrice ? String(minPrice):"");
    const [localMax,setLocalMax]=useState(maxPrice ? String(maxPrice):"");





  return (
    <Modal
    visible={visible}
    animationType="slide"
    presentationStyle="pageSheet"
    onRequestClose={onClose}
    >
    <View className="flex-1 bg-gray-50">
        <View className="flex-row items-center justify-between px-5 pt-6 pb-4 bg-white border-b border-gray-100">
        FilterModal</View>
    </View>
    </Modal>

  )
}