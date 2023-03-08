import React from "react";
import { Badge, Text } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import Header from "../components/Header";

export default function NewDeal() {
  return (
    <React.Fragment>
      <Header
        title="New Deals"
        description=""
        actions={[
          {
            icon: (e) => (
              <View style={style.bellIconText}>
                <Badge style={style.bellIconBadge} size={6} />
                <Icon name="bell" {...e} />
              </View>
            ),
            onPress: () => {},
          },
          {
            icon: (props) => <Icon name="search" {...props} />,
            onPress: () => {},
          },
        ]}
      />
      <View>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          cupiditate nemo facilis, odit expedita similique possimus earum
          voluptatum hic laudantium dolorem architecto quod voluptatem, iure
          alias ipsum labore eveniet reprehenderit!
        </Text>
      </View>
    </React.Fragment>
  );
}

const style = StyleSheet.create({
  bellIconText: {
    position: "relative",
    display: "flex",
  },
  bellIconBadge: {
    position: "absolute",
    right: 2,
    top: 2,
  },
});
