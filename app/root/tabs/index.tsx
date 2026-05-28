import { useCallback, useState } from 'react';
import { useUser } from '@clerk/expo';
import { useFocusEffect, useRouter } from 'expo-router';
import { Property } from '@/types';
import { supabase } from '@/lib/supabase';

import { View,Text,FlatList} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
export default function HomeScreen(){

    const {user}=useUser();
    const router=useRouter();

    const [featured,setFeatured]=useState<Property[]>([]);
    const [recommended,setRecommended]=useState<Property[]>([]);
    const [loading,setLoading]=useState(true);

    console.log(featured,recommended);

    const fetchProperties=async()=>{
        setLoading(true);

        const {data:featuredData}=await supabase
        .from("properties")
        .select("*")
        .eq("is_featured",true)
        .order("created_at",{ascending:false});

        const {data:recommendedData}=await supabase
        .from("properties")
        .select("*")
        .eq("is_featured",true)
        .order("created_at",{ascending:false});

        setFeatured(featuredData ?? []);
        setRecommended(recommendedData ?? []);
        setLoading(false);
    };

    useFocusEffect(
        useCallback(()=>{
            fetchProperties();
        },[]),
    )

    return(
        <SafeAreaView className="flex-1 bg-gray-50">
          <FlatList
           data={recommended} 
           keyExtractor={(item)=>item.id}
           contentContainerStyle={{paddingBottom:100}}
           showsVerticalScrollIndicator={false}
           ListHeaderComponent={
            <View>
                {/* Header */}
                <View className='flex-row items-center justify-between ps-5 pt-4 pb-5'>
                    <Image 
                    source={require('../../../assets/images/kribb.png')}
                    style={{width:90,height:36}}
                    resizeMode="contain"
                    />

                    <

                </View>

                {/*Recommended Header */}
                <Text className='text-gray-900 text-lg font-bold px-5 mb-4'>
                    Recommended
                </Text>
            </View>
        }
        renderItem={({item})=>(
            <View className='px-5'>
                <Text>{item.title}</Text>

            </View>
        )}
        ListEmptyComponent={
            loading ?(
                <View className='items-center py-10'>
                    <Text className="text-gray-400">No properties found</Text>
                </View>
            ):null
        }
          />
        </SafeAreaView>

    )
}