import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { AppColors } from '../../../../utils/AppColors'
import { AppStrings } from '../../../../utils/AppStrings'
import { AppImages } from '../../../../utils/AppImages'

const GymComponent = () => {
    return (
        <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 3 }}>
                <View style={{ height: 150, marginEnd: 8, flex: 1, borderRadius: 12,justifyContent:'flex-end' }}>
                    <Image resizeMode='stretch' source={AppImages.gymsample2} style={{ position: 'absolute', width: '100%', height: '100%', borderRadius: 12 }} />
                    <View style={{marginBottom:8,marginLeft:8}}>
                        <View style={{  width:'50%',borderRadius: 8,paddingVertical:4,paddingHorizontal:4, backgroundColor: AppColors.pink, alignItems: 'center',   }}>
                            <Text style={{fontSize: 12, fontWeight: '400', color: AppColors.white, }}>Flexibility</Text>
                        </View>
                        <Text style={{ fontSize: 16, fontWeight: '600', color: AppColors.white }}>Push Ups</Text>

                    </View>

                </View>

                <View style={{ height: 150, marginEnd: 8, flex: 1, borderRadius: 12,justifyContent:'flex-end' }}>
                    <Image source={AppImages.gymsample2} style={{ position: 'absolute', width: '100%', height: '100%', borderRadius: 12 }} />
                    <View style={{marginBottom:8,marginLeft:8}}>
                        <View style={{  width:'50%',borderRadius: 8,paddingVertical:4,paddingHorizontal:4, backgroundColor: AppColors.blue, alignItems: 'center',   }}>
                            <Text style={{fontSize: 12, fontWeight: '400', color: AppColors.white, }}>Flexibility</Text>
                        </View>
                        <Text style={{ fontSize: 16, fontWeight: '600', color: AppColors.white }}>Barbell Squats</Text>

                    </View>

                </View>
            </View>
        </View>
    )
}

export default GymComponent