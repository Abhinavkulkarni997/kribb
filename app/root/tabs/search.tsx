import { View, Text } from 'react-native'
import React from 'react'
import {SafeAreaView} from  'react-native-safe-area-context';
import {useFilterStore} from "@/store/useFilterStore";
import {Property} from "@types";


export default function search() {
  const [results,setResults]=useState<(Property[])>([]);
  const [loading,setLoading]=useState(false);
  const [showFilter,setShowFilters]=useState(false);


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
        </View>
    </View>
    </View>
    </SafeAreaView>
  )
}