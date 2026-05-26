import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react';
import {useState} from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
import {useSignIn} from "@clerk/expo";
import {Link,useRouter} from "expo-router";


export default function SignIn() {
    const {signIn,errors,fetchStatus}=useSignIn();
    const router=useRouter();

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [code,setCode]=useState("");

    const onSignInPress=async()=>{
        const {error}=await signIn.password({
            emailAddress:email,
            password
        });
        if(error){
            return;
        }
        if(signIn.status==="complete"){
            await signIn.finalize({
                navigate:({session,decorateUrl})=>{
                    if(session?.currentTask){
                        console.log(session?.currentTask);
                        return;
                    }
                    const url=decorateUrl("/");
                    router.replace(url as any);
                },
            });

        }else if(signIn.status==="needs_second_factor"){
            await signIn.mfa.sendPhoneCode();
        }else if(signIn.status==="needs_client_trust"){
            const emailCodeFactor=signIn.supportedSecondFactors.find(
                (factor)=factor.strategy="email_code"
            );
            if(emailCodeFactor){
                await signIn.mfa.sendEmailCode();
            }

        }else{
            console.error("sign-in attempt not complete:",signIn);
        }
    };

    const onVerifyPress=async()=>{
        await signIn.mfa.verifyEmailCode({code});

        if(signIn.status==="complete"){
            await signIn.finalize({
                navigate:({session,decorateUrl})=>{
                    if(session?.currentTask){
                        console.log(session?.currentTask);
                        return;
                    }
                    const url=decorateUrl("/");
                    router.replace(url as any);
                },
            });
        }else{
            console.error("Sign-in attempt not complete:",signIn);
        }
    };

    const isLoading=fetchStatus==="fetching";
    if(signIn.status==="needs_client_trust"){
        return(
            <View className="flex-1 justify-center items-center bg-white px-6">
                <Image source={require("../../assests/images/kribb.png")}
                className="w-32 h-16 mb-8"
                resizeMode="contain"
                />
                <Text className="text-2xl font-bold text-gray-800 mb-2">
                    Verify your account
                </Text>
                <TextInput className="w-full border  border-gray-300 ">
                </TextInput>

                
            </View>
        )
    }

  return (
    <ScrollView contentContainerStyle={{flexGrow:1}} className="bg-white" keyboardShouldPersistTaps="handled">
    <View className="flex-1 justify-center px-6 py-12">

    </View>
    <SafeAreaView className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold">SignOut</Text>
      <TouchableOpacity onPress={handleSignOut}>SignOut</TouchableOpacity>
    </SafeAreaView>
    </ScrollView>
  )
}