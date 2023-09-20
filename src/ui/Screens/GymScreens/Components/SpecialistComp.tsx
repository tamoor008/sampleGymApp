import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { AppColors } from '../../../../utils/AppColors'
import { AppImages } from '../../../../utils/AppImages'
import { AppStrings } from '../../../../utils/AppStrings'
import GridItem from './GridItem'

const SpecialistComp = () => {
    const renderItem = ({ item }) => <GridItem item={item} />;
    const numColumns = 3; // Adjust the number of columns as needed

    const item =
    {
        image: AppImages.specialist,
        title: 'Lorem Ipsum',
        address: 'Street address and city',
        description: 'Description. Eu proin sapien ipsum vitae quis. Sodales eu quis dolor sed tincidunt augue lectus in tellus. Tristique turpis gravida eget condimentum mollis sed.',
        time: '24 hour clock system e.g 09:00 - 20:00',
        phone: '+923215799205',
        email: 'tamoormalik088@gmail.con',
    }

    const data = [
        {
            id: Math.random(),
            title: 'Сoach 2023',
        },
        {
            id: Math.random(),
            title: 'Physiology',
        },
        {
            id: Math.random(),
            title: 'Biochemistry',
        },
        {
            id: Math.random(),
            title: 'Dietetics',
        },
        {
            id: Math.random(),
            title: 'Anatomy',
        },
    ]
    return (
        <View style={{ borderRadius: 20, backgroundColor: 'white', marginVertical: 8,marginHorizontal:16}}>
            <Image resizeMode='stretch' style={{borderRadius:12, height: 130, width: '100%' }} source={item.image} />

            <View style={{ marginVertical: 8 }}>
                <Text style={{ fontSize: 22, color: AppColors.darkBlack, fontWeight: '400' }}>{item.title}</Text>

                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={numColumns}
                    contentContainerStyle={{
                        justifyContent: 'space-between',
                        marginVertical:8
                    }}
                />
            </View>

          
        </View>
    )
}

export default SpecialistComp