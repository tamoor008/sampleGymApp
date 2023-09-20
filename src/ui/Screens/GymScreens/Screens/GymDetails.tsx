import { View, Text, Image, TextInput, StatusBar, FlatList, TouchableOpacity, ScrollView, Modal } from 'react-native'
import React, { useState } from 'react'
import { AppImages } from '../../../../utils/AppImages'
import { AppStrings } from '../../../../utils/AppStrings'
import { AppColors } from '../../../../utils/AppColors'
import SpecialistComp from '../Components/SpecialistComp'
import GymComponent from '../Components/GymComponent'
import Swiper from 'react-native-swiper';
import DeleteComponent from '../Components/DeleteComponent'

const GymDetails = ({navigation}) => {
    const item =
    {
        image: AppImages.gymsample2,
        title: 'Second GYM Long name',
        address: 'Street address and city',
        description: 'Description. Eu proin sapien ipsum vitae quis. Sodales eu quis dolor sed tincidunt augue lectus in tellus. Tristique turpis gravida eget condimentum mollis sed.',
        time: '24 hour clock system e.g 09:00 - 20:00',
        phone: '+923215799205',
        email: 'tamoormalik088@gmail.con',
    }

    const [isModalVisible, setIsModalVisible] = useState(false)

    const modalVisibility = () => {
        setIsModalVisible(false)
    }
    return (
        <View style={{ backgroundColor: AppColors.backGroundColor, flex: 1 }}>
            <StatusBar barStyle={'dark-content'} backgroundColor={AppColors.backGroundColor} />
            {/* // TOP VIEW */}
            <View>
                <View style={{ flexDirection: 'row', alignItems: 'center', padding: 16 }}>
                    <TouchableOpacity onPress={()=>{navigation.goBack()}} style={{flexDirection:'row' }}>
                        <Image resizeMode='contain' style={{ width: 20, height: 20, marginEnd: 5 }} source={AppImages.back} />
                        <Text style={{ fontWeight: '500', fontSize: 16, color: AppColors.textGrey, }}>{AppStrings.yourGyms}</Text>
                    </TouchableOpacity>

                </View>
            </View>

            <ScrollView>
                <View style={{ borderRadius: 20, backgroundColor: 'white', paddingVertical: 16, marginHorizontal: 16, marginVertical: 8 }}>
                    <Image resizeMode='contain' style={{ height: 130, width: '100%', marginHorizontal: 16 }} source={item.image} />


                    {/* GYM DETAILS */}
                    <View style={{ marginVertical: 8, marginHorizontal: 16 }}>
                        <Text style={{ fontSize: 22, color: AppColors.darkBlack, fontWeight: '600' }}>{item.title}</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                            <Text style={{ marginEnd: 5, fontWeight: '400', fontSize: 16, color: AppColors.darkGrey }}>{item.description}</Text>
                        </View>

                        <View style={{ marginVertical: 8 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 4 }}>
                                <Image resizeMode='contain' style={{ width: 14, height: 14, marginEnd: 5 }} source={AppImages.clock} />
                                <Text style={{ fontWeight: '400', fontSize: 14, color: AppColors.iconsGrey, }}>{AppStrings.yourGyms}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 4 }}>
                                <Image resizeMode='contain' style={{ width: 14, height: 14, marginEnd: 5 }} source={AppImages.way} />
                                <Text style={{ fontWeight: '400', fontSize: 14, color: AppColors.iconsGrey, }}>{item.address}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 4 }}>
                                <Image resizeMode='contain' style={{ width: 14, height: 14, marginEnd: 5 }} source={AppImages.phone} />
                                <Text style={{ fontWeight: '400', fontSize: 14, color: AppColors.iconsGrey, }}>{item.phone}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 4 }}>
                                <Image resizeMode='contain' style={{ width: 14, height: 14, marginEnd: 5 }} source={AppImages.mail} />
                                <Text style={{ fontWeight: '400', fontSize: 14, color: AppColors.iconsGrey, }}>{item.email}</Text>
                            </View>
                        </View>

                    </View>
                    {/* BUTTONs */}
                    <View style={{ marginHorizontal: 16 }}>
                        <TouchableOpacity style={{ marginVertical: 8, paddingHorizontal: 4, paddingVertical: 12, backgroundColor: AppColors.purple, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 18, fontWeight: '600', color: AppColors.white }}>{AppStrings.viewDetails}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setIsModalVisible(true) }} style={{ flexDirection: 'row', justifyContent: 'center', paddingHorizontal: 4, paddingVertical: 8, borderRadius: 10, alignItems: 'center', }}>
                            <Image style={{ width: 18, height: 18, marginEnd: 8 }} source={AppImages.delete} />
                            <Text style={{ fontSize: 18, fontWeight: '600', color: AppColors.red }}>{AppStrings.delete}</Text>
                        </TouchableOpacity>

                    </View>
                    {/* Specialists */}
                    <View style={{ marginHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 16 }}>
                        <Text style={{ fontWeight: '400', fontSize: 20, color: AppColors.darkBlack }}>{AppStrings.specialists}</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <Text style={{ fontWeight: '400', fontSize: 14, color: AppColors.textGrey, marginEnd: 5 }}>{AppStrings.seeAll}</Text>
                            <Image resizeMode='contain' style={{ width: 14, height: 14, transform: [{ rotate: '180deg' }] }} source={AppImages.back} />
                        </View>
                    </View>
                    {/* SpecialListCOmp */}
                    <Swiper
                        loop={false}
                        showsPagination={true}
                        height={300}
                    >

                        <SpecialistComp />
                        <SpecialistComp />
                        <SpecialistComp />


                    </Swiper>

                    {/* Gym Specific Workouts */}
                    <View style={{ marginHorizontal: 16 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 0 }}>
                            <Text style={{ fontWeight: '400', fontSize: 20, color: AppColors.darkBlack }}>{AppStrings.gymSpecific}</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                <Text style={{ fontWeight: '400', fontSize: 14, color: AppColors.textGrey, marginEnd: 5 }}>{AppStrings.seeAll}</Text>
                                <Image resizeMode='contain' style={{ width: 14, height: 14, transform: [{ rotate: '180deg' }] }} source={AppImages.back} />
                            </View>
                        </View>
                        <GymComponent />
                    </View>
                </View>
            </ScrollView>

            <Modal transparent={true} visible={isModalVisible} animationType='fade'>
                <DeleteComponent modalVisibility={modalVisibility} />
            </Modal>







        </View>
    )
}

export default GymDetails