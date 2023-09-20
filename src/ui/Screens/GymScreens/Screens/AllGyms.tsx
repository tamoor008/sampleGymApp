import { View, Text, Image, TextInput, StatusBar, FlatList, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { AppImages } from '../../../../utils/AppImages'
import { AppStrings } from '../../../../utils/AppStrings'
import { AppColors } from '../../../../utils/AppColors'
import GymComp from '../Components/GymComp'

const AllGyms = ({navigation}) => {
    const [gymData, setGymData] = useState([
        {
            id: Math.random(),
            image: AppImages.gymsample,
            title: 'Golds GYM Long name',
            address: 'Street address and city',
        },
        {
            id: Math.random(),
            image: AppImages.gymsample2,
            title: 'Second GYM Long name',
            address: 'Street address and city',
        },
        {
            id: Math.random(),
            image: AppImages.gymsample2,
            title: 'Too Long name Lorem Ipsum of GYM ',
            address: 'Street address and city',
        },

    ])

    const navigate=()=>{
        navigation.navigate('GymDetails')
    }
    return (
        <View style={{ backgroundColor: AppColors.backGroundColor, flex: 1 }}>
            <StatusBar barStyle={'dark-content'} backgroundColor={AppColors.backGroundColor} />

            <View>
                {/* // TOP VIEW */}

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 16 }}>
                    <Image style={{ width: 100, height: 40 }} source={AppImages.logo} />
                    <Text style={{ fontWeight: 'normal', fontSize: 16, color: AppColors.lightGrey }}>{AppStrings.switchProfile}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16 }}>
                    <Text style={{ fontWeight: 'normal', fontSize: 20, color: AppColors.lightBlack }}>{AppStrings.yourGyms}</Text>
                    <Text style={{ fontWeight: 'normal', fontSize: 16, color: AppColors.lightGrey }}>{AppStrings.edit}</Text>

                </View>
                {/* //Search */}

                <View style={{ flexDirection: 'row', backgroundColor: AppColors.white, alignItems: 'center', borderRadius: 12, margin: 16, paddingHorizontal: 16, paddingVertical: 2, marginBottom: 8 }}>
                    <Image style={{ width: 18, height: 18, marginEnd: 8 }} source={AppImages.searchIcon} />
                    <TextInput style={{ fontWeight: 'normal', fontSize: 16, color: AppColors.lightGrey, flex: 1 }} placeholder={'Search'}></TextInput>
                </View>
            </View>

            {/* //FlatList */}
            <View style={{ flex: 1, }}>
                <FlatList
                    data={gymData}
                    renderItem={({ item, index }) => <GymComp onpress={navigate} item={item} />}
                    keyExtractor={(item) => {
                        const key = item.id.toString()
                        return key
                    }}
                />
            </View>



        </View>
    )
}

export default AllGyms