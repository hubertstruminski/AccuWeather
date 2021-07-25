import React from 'react';
import { 
    View, 
    Text 
} from 'react-native';
import styles from './headerListStyle';
import { convertEpochDateTimeToDate } from '../../../util/parsers';

const HeaderList = ({ value }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {convertEpochDateTimeToDate(value)}
            </Text>
        </View>
    );
};

export default HeaderList;