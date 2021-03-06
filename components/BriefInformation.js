import { COLORS, SIZES, SHADOWS, assets, FONTS } from "../constants";
import { View, Text, Image } from "react-native";

export const EndDate = ({ date }) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        paddingHorizontal: SIZES.font,
        paddingVertical: SIZES.base,
        justifyContent: "center",
        alignItems: "center",
        ...SHADOWS.light,
        elevation: 1,
        maxWidth: "50%",
      }}
    >
      <Text
        style={{
          fontFamily: FONTS.regular,
          fontSize: SIZES.small,
          color: COLORS.primary,
        }}
      >
        Ending in:
      </Text>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: SIZES.medium,
          color: COLORS.primary,
        }}
      >
        {date}
      </Text>
    </View>
  );
};

export const Excerpt = ({ date }) => {
  return (
    <View
      style={{
        width: "100%",
        paddingHorizontal: SIZES.font,
        marginTop: -SIZES.extraLarge,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <People />
      <EndDate date={date} />
    </View>
  );
};

export const ImageComponent = ({ imgUrl, index }) => {
  return (
    <Image
      source={imgUrl}
      resizeMode="contain"
      alt="Bidders of this NFT"
      style={{
        width: 48,
        height: 48,
        marginLeft: index === 0 ? 0 : -SIZES.font,
        borderRadius: 50,
        overflow: "hidden",
        borderWidth: 3,
      }}
    />
  );
};

export const NFTTitle = ({ title, subTitle, titleSize, subTitleSize }) => {
  return (
    <View>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: titleSize,
          color: COLORS.primary,
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          fontFamily: FONTS.regular,
          fontSize: subTitleSize,
          color: COLORS.primary,
        }}
      >
        {subTitle}
      </Text>
    </View>
  );
};

export const People = () => {
  // const items = [
  //   assets.person02 + Math.floor(Math.random() * 8) + 2,
  //   assets.person03 + Math.floor(Math.random() * 8) + 2,
  //   assets.person04 + Math.floor(Math.random() * 8) + 2,
  // ];
  return (
    <View style={{ flexDirection: "row" }}>
      {[assets.person02, assets.person06, assets.person04].map((imgUrl, index) => (
        <ImageComponent imgUrl={imgUrl} index={index} key={`People-${index}`} />
      ))}
    </View>
  );
};

export const Price = ({ price }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image
        source={assets.eth}
        resizeMode="contain"
        style={{
          width: 20,
          height: 20,
        }}
      />
      <Text
        style={{
          fontFamily: FONTS.medium,
          fontSize: SIZES.font,
          color: COLORS.primary,
        }}
      >
        ???{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      </Text>
    </View>
  );
};
