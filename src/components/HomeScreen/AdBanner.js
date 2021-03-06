/**
 * AdBanner.js
 * @author hangpy
 * created on 2018-12-16
 */

import React, { Component } from 'react';
import { ScrollView, FlatList, View, StyleSheet, Text, Dimensions, Alert, TouchableOpacity } from 'react-native';
import {makeSquareRatio, makeMargin, makeRadius, DeviceScreen} from '../../styles/Style';
import {Navigation} from "react-native-navigation";

export default class AdBanner extends Component <{}> {

    state = {
        banners: null
    };

    componentWillMount(): void {
        this.setState({
            banners: [
                { key: 'Banner1', color: '#e9ba29'},
                { key: 'Banner2', color: '#457044' },
                { key: 'Banner3', color: '#c7464f' },
            ],
        });
    }

    render() {
        return (
            /**
             * TODO
             * loading: the banner which stores in AWS should be loaded
             *          find the way to utilize cache for users to have great experience
             * slide issue: each banner or card must find their place by own when
             *              user flip the scrollView
             */
            <ScrollView horizontal
                        showsHorizontalScrollIndicator={false}
                        style={{marginBottom: 20}}
                        pagingEnabled={true}
            >
                {/* banner part to be fetched later */}
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    // marginRight={10}
                    data={this.state.banners}
                    pagingEnabled={true}
                    keyExtractor={(item, key) => key.toString()}
                    renderItem={
                        ({item}) => (
                            <TouchableOpacity onPress={() => {
                                Navigation.push(this.props.componentId, {
                                    component: {
                                        name: 'AdDetailPage'
                                    }
                                })}}
                            >
                                <View style={[
                                    styles.bannerContainer,
                                    {backgroundColor: item.color},
                                    // makeSquareRatio(0.88).threeToOne,
                                    // makeMargin(0.88).marginShowingNext,
                                    // makeRadius()
                                ]}>
                                    <Text style={styles.bannerText}>{item.key}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    bannerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        // shadowColor: '#000',
        // shadowOffset: { width: 1, height: 1 },
        // shadowOpacity: 0.6,
        // shadowRadius: 3,
        width: DeviceScreen.width,
        height: DeviceScreen.width * 0.3
    },
    bannerText: {
        fontSize: 15,
        color: '#fff'
    }
});