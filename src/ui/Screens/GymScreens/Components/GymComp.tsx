import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { AppColors } from '../../../../utils/AppColors'
import { AppImages } from '../../../../utils/AppImages'
import { AppStrings } from '../../../../utils/AppStrings'

const GymComp = ({ item ,onpress}) => {
    return (
        <View style={{ borderRadius: 20, backgroundColor: 'white', padding: 16, marginHorizontal: 16, marginVertical: 8 }}>
            <Image resizeMode='contain' style={{ height: 130, width: '100%' }} source={item.image} />

            <View style={{ marginVertical: 8 }}>
                <Text style={{ fontSize: 22, color: AppColors.darkBlack, fontWeight: '400' }}>{item.title}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 3 }}>
                    <Image style={{ width: 16, height: 16, marginEnd: 8 }} source={AppImages.way} />
                    <Text style={{ marginEnd: 5, fontWeight: 'normal', fontSize: 14, color: AppColors.lightGrey }}>{item.address}</Text>
                </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 3 }}>
                <TouchableOpacity style={{marginEnd:8,flex:1,paddingHorizontal:4,paddingVertical:8,borderWidth:1,borderColor:AppColors.purple,borderRadius:10,alignItems:'center',justifyContent:'center'}}>
                    <Text style={{fontSize:18,fontWeight:'600',color:AppColors.purple}}>{AppStrings.edit}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onpress} style={{marginStart:8,flex:1,paddingHorizontal:4,paddingVertical:8,backgroundColor:AppColors.purple,borderRadius:10,alignItems:'center',justifyContent:'center'}}>
                    <Text style={{fontSize:18,fontWeight:'600',color:AppColors.white}}>{AppStrings.viewDetails}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default GymComp