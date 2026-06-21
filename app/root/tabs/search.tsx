import { View, Text,TextInput, Touchable, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import {SafeAreaView} from  'react-native-safe-area-context';
import {useFilterStore} from "../../../store/filterStore";
import {Property} from "../../../types";
import { useLocalSearchParams } from 'expo-router';


export default function search() {
  const [results,setResults]=useState<(Property[])>([]);
  const [loading,setLoading]=useState(false);
  const [showFilter,setShowFilters]=useState(false);

  const {openFilters}=useLocalSearchParams<{openFilters?:string}>();

  useEffect(()=>{
    if(openFilters==="true"){
      setShowFilters(true);
    }
  },[openFilters]);
  const {
    search,
    type,
    bedrooms,
    minPrice,
    maxPrice,
    setSearch,
    setType,
    setBedrooms,
    setMinPrice,
    setMaxPrice,
  }=useFilterStore();

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <View className="px-5 pt-4 pb-3">
      <Text className="text-2xl font-bold text-gray-900 mb-4">Find Property</Text>

      <View className="flex-row items-center gap-3">
        <View className="flex-1 flex-row items-center bg-white rounded-2xl px-4 gap-3 "
        style={{
          shadowColor:"#000",
          shadowOffset:{width:0,height:1},
          shadowOpacity:0.06,
          shadowRadius:6,
          elevation:2,
        }}
        >
          {search.length >0 && (
            <TouchableOpacity onPress={()=>setSearch("")}
            className="p-2 rounded-full bg-gray-100 items-center justify-center">
            <Ionicons name="close-outline" size={18} color="#9CA3AF"/>
            </TouchableOpacity>
          )}
        
          <TextInput
          className="flex-1 text-gray-900 py-3"
          placeholder="Search by title or city..."
          placeholderTextColor="#9CA3AF"
          value={search}
          onChangeText={setSearch}
          autoCapitalize="none"
          />
        </View>
    </View>
    </View>
    </SafeAreaView>
  )
}