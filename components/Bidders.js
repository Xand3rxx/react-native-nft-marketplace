import { COLORS, FONTS, SIZES } from "../constants";
import { Price } from "./BriefInformation";
import React from "react";
import { View, Text, Image } from "react-native";

const Bidders = ({ data }) => {
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: SIZES.base,
        paddingHorizontal: SIZES.base * 2,
      }}
      key={data.id}
    >
      <Image
        source={data.image}
        resizeMode="contain"
        style={{ width: 48, height: 48 }}
      />
      <View>
        <Text
          style={{
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.small,
            color: COLORS.primary,
          }}
        >
          Bid placed by{data.name}
        </Text>
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small - 2,
            color: COLORS.secondary,
          }}
        >
          {data.date}
        </Text>
      </View>
      <Price price={data.price} />
    </View>
  );
};

export default Bidders;
