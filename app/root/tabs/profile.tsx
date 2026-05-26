import React from 'react';
import {Text,View,TouchableOpacity} from 'react-native';
import {useAuth} from "@clerk/expo";

export default function Profile(){
    const router=useRouter();
    
    const {signOut}=useAuth();
    const handleSignOut=async ()=>{
        try{
            await signOut();
            router.replace("/sign-in");
        }catch(error){
            console.log("Error signing out:",error);
        }
    }
    return(
        <View>
            <Text>Profile</Text>
            <TouchableOpacity onPress={handleSignOut}>
                <Text>SignOut</Text>
                </TouchableOpacity>
        </View>
    )
}