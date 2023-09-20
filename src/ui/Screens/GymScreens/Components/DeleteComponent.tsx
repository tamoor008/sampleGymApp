import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { AppImages } from '../../../../utils/AppImages'
import { AppStrings } from '../../../../utils/AppStrings'
import { AppColors } from '../../../../utils/AppColors'

const DeleteComponent = ({modalVisibility}) => {
    return (
        <View style={{ padding: 16, flex: 1, backgroundColor: '#00000080',justifyContent:'center' }}>
            <View style={{height:350,backgroundColor:'#F4F3FA',justifyContent:'space-around',padding: 16,borderRadius:16}}>
                <View style={{ flexDirection: 'row-reverse', }}>
                    <TouchableOpacity onPress={()=>modalVisibility()} style={{ borderRadius: 5, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', height: 36, width: 36 }}>
                        <Image style={{ width: 14, height: 14 }} source={AppImages.cross} />
                    </TouchableOpacity>
                </View>

                <Text style={{ paddingHorizontal: 16, textAlign: 'center', fontSize: 28, fontWeight: '600', color: AppColors.darkBlack }}>{AppStrings.deleteGym}</Text>
                <View style={{ marginHorizontal: 16 }}>
                    <TouchableOpacity style={{ marginBottom: 8, paddingHorizontal: 4, paddingVertical: 12, backgroundColor: AppColors.purple, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 18, fontWeight: '600', color: AppColors.white }}>{AppStrings.yes}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginEnd: 8, paddingHorizontal: 4, paddingVertical: 8, borderWidth: 1, borderColor: AppColors.purple, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 18, fontWeight: '600', color: AppColors.purple }}>{AppStrings.no}</Text>
                    </TouchableOpacity>

                </View>
            </View>

        </View>
    )
}

export default DeleteComponent