import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, ListRenderItem } from "react-native";
import { fetchFeed } from "../api";
import styles from "../shared";
import { Feed, Product } from "../shared/types";


const FeedScreen: React.FC = () => {
    const [data, setData] = useState<Feed | null>(null);

    useEffect(() => {
        fetchFeed().then(items =>
            setData(items)
        )
    }, [])

    const renderItem: ListRenderItem<Product> = (data) => (
        <View key={data.index} style={styles.listItemWrapper} >
            <Image source={{ uri: data.item.thumbnail }} style={styles.listItemImage} />
            <View style={{
                flexDirection:
                    "column"
            }}>
                <Text style={styles.textBold}>
                    {data.item.title}
                </Text>
                <Text style={styles.textLight}>
                    Price: ${data.item.price}
                </Text>
            </View>
        </View>
    )

    return (
        <View style={styles.listContainer}>
            <FlatList
                data={data?.products}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
            >
            </FlatList>
        </View>
    )
}

export default FeedScreen;
