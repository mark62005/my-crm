import React from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import stylesFn from "./styles";
import { routeNames } from "../../../utilities/constants";
import Title from "../../../components/Title";
import Row from "./row";
import Button from "../../../components/Button";

const Section = ({ customersByRegion, region }) => {
    const styles = stylesFn();
    const { navigate } = useNavigation();

    return (
        <View style={ styles.section }>
            <Title key={ region.id } text={ region.name } />

            {
                customersByRegion && customersByRegion.length > 0
                    ? customersByRegion.map((customer) => (
                        <Row key={ customer.id } customer={ customer } />
                    ))
                    : (
                        <View style={ styles.section }>
                            <Text style={ styles.subTitle }>{ "No customers yet!" } </Text>

                            <Button
                                text={ routeNames.customers.NEW_CUSTOMER }
                                onPress={ () => {
                                    navigate(routeNames.customers.NEW_CUSTOMER);
                                } }
                                disabled={ false }
                            />
                        </View>
                    )
            }
        </View>
    );
};

Section.propTypes = {
    customersByRegion: PropTypes.array,
    region: PropTypes.object.isRequired,
};

export default Section;
