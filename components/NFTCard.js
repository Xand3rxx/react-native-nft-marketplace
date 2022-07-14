import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import { Excerpt, Price, NFTTitle } from "./BriefInformation";
import { CircularButton, BidButton } from "./Button";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image } from "react-native";

const NFTCard = ({ data }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    alert("Working!");
  };
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}
    >
      <View style={{ width: "100%", height: 250 }}>
        <Image
          source={data.image}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />
        <CircularButton
          imgUrl={assets.heart}
          right={10}
          top={10}
          onPress={handlePress}
        />
      </View>

      <Excerpt date={`${data.image}h 30m`} />
      <View style={{ width: "100%", padding: SIZES.font }}>
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.large}
          subTitleSize={SIZES.small}
        />
        <View
          style={{
            marginTop: SIZES.font,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Price price={data.price} />
          <BidButton
            minWidth={120}
            fontSize={SIZES.font}
            handlePress={() => navigation.navigate("Details", { data })}
          />
        </View>
      </View>
    </View>
  );
};

export default NFTCard;
