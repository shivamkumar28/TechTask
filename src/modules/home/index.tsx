import { FlatList, Image, Switch, Text, TextInput, View } from "react-native"
import { styles } from "./style"
import { Colors } from "../../constant"
import { Loader } from "../../components"
import { useEffect, useMemo, useState } from "react"
import axios from "axios"

const Home = () => {
    const [isLoader, setLoader] = useState(false)
    const [list, setList]: any[] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        getAppList()
    }, [])

    const getAppList = async () => {
        try {
            setLoader(true)
            const response = await axios.post('https://navkiraninfotech.com/g-mee-api/api/v1/apps/list?kid_id=378')
            setList(response?.data?.data?.app_list || [])
            setLoader(false)
        }
        catch (e) {
            setLoader(false)
        }
    }

    const handleToggle = (packageName: number) => {
        setList((prevData: any) => {
            const newData = [...prevData];
            const index = newData.findIndex((obj: any) => obj.app_package_name == packageName)
            newData[index].status = newData[index].status.toLowerCase() === 'active' ? 'Inactive' : 'Active';
            return newData;
        });
    };

    /**
     * render charater list
     * @param {item,index}
     * @returns
     */
    const renderList = ({ item, index }: any) => {
        return <View key={index} style={styles.itemContainer}>
            <View style={styles.card}>
                <View style={styles.imgView}>
                    <Image source={{ uri: item.app_icon }} style={styles.fullView} />
                </View>
                <View style={styles.detailView}>
                    <Text style={styles.name} numberOfLines={1}>{item.app_name}</Text>
                    <Text style={styles.subTitle} numberOfLines={1}>{item.app_package_name}</Text>
                    <View style={styles.status}>
                        <View style={{ ...styles.green, backgroundColor: item.status.toLowerCase() == "active" ? Colors.green : Colors.grey }}></View>
                        <Text style={styles.species}>{`Status : ${item.status.toUpperCase()}`}</Text>
                    </View>
                </View>
                <View style={styles.switchV}>
                    <Switch
                        trackColor={{ false: Colors.madGrey, true: Colors.blue }}
                        thumbColor={Colors.fadeWhite}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => handleToggle(item?.app_package_name)}
                        value={item.status.toLowerCase() === 'active'}
                    />
                </View>
            </View>
        </View>
    }

    const searchedList = (): any[] => {
        return search.trim() !== ''
            ? list.filter((it: any) =>
                it?.app_name.toLowerCase().includes(search.toLowerCase()) || it?.app_package_name.toLowerCase().includes(search.toLowerCase())
            )
            : list || [];
    };

    const memoizedRenderList = useMemo(
        () => renderList,
        [list],
    );

    return <View style={styles.container}>
        <View style={styles.searchV}>
            <TextInput
                value={search}
                onChangeText={(txt) => setSearch(txt)}
                style={{ fontSize: 16, color: Colors.black, paddingVertical: 10 }}
                placeholder={'Search...'}
                placeholderTextColor={Colors.black}
            />
        </View>
        <FlatList
            data={searchedList()}
            renderItem={memoizedRenderList}
            keyboardDismissMode={'on-drag'}
            keyExtractor={(item: any, index: any) => index}
            style={{ flex: 1, }}
        />
        {isLoader && <Loader size={"large"} color={Colors.black} />}
    </View>
}

export default Home