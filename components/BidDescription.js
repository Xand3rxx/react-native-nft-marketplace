import { COLORS, FONTS, SIZES } from "../constants";
import { Price, NFTTitle } from "./BriefInformation";
import { useState } from "react";
import { View, Text } from "react-native";

const BidDescription = ({ data }) => {
  const [text, setText] = useState(data.description.slice(0, 150));
  const [readMore, setReadMore] = useState(false);

  return (
    <>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.extraLarge}
          subTitleSize={SIZES.font}
        />
        <Price price={data.price} />
      </View>
      <View
        style={{
          marginVertical: SIZES.extraLarge * 1.5,
        }}
      >
        <Text
          style={{
            fontSize: SIZES.font,
            fontFamily: FONTS.semibold,
            color: COLORS.primary,
          }}
        >
          Description
        </Text>
        <View style={{ marghinTop: SIZES.base }}>
          <Text
            style={{
              fontSize: SIZES.small,
              fontFamily: FONTS.regular,
              color: COLORS.secondary,
              lineHeight: SIZES.large,
            }}
          >
            {text}
            {!readMore && "..."}
            <Text
              style={{
                fontSize: SIZES.small,
                fontFamily: FONTS.semiBold,
                color: COLORS.dark,
              }}
              onPress={() => {
                if (!readMore) {
                  setText(data.description);
                  setReadMore(true);
                } else {
                  setText(data.description.slice(0, 150));
                  setReadMore(false);
                }
              }}
            >
              {readMore ? "...[Show Less]" : "[Read more]"}
            </Text>
          </Text>
        </View>
      </View>
    </>
  );
};

export default BidDescription;
