import React from 'react';
import {View} from 'react-native';
import {Row, Col} from 'react-native-easy-grid';
import {Badge, Divider, Text} from 'react-native-paper';
import Theme from '../theme';

const colors = Theme.colors;
const Wizard = ({steps, simple}) => {
  return (
    <Row
      style={{
        backgroundColor: 'white',
        paddingLeft: 20,
        paddingRight: 20,
        height: 'auto',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      {steps.map((step, index) => {
        const badgeStyle = step.isActive
          ? {backgroundColor: colors.primary}
          : {
              backgroundColor: '#E3E7F2',
              color: colors.blackText,
            };
        const labelStyle = step.isActive
          ? {fontSize: 12, color: colors.primary}
          : {fontSize: 12, color: colors.gray};
        return (
          <React.Fragment key={`step-${index}`}>
            <Col size={2}>
              <View
                style={{
                  flexDirection: 'row',
                  gap: 10,
                  justifyContent: 'center',
                }}>
                <Badge style={badgeStyle}>{index + 1}</Badge>
                <Text style={labelStyle}>{step.label}</Text>
              </View>
            </Col>
            {!simple && index + 1 < steps.length && (
              <Col style={{padding: 20}}>
                <Divider />
              </Col>
            )}
          </React.Fragment>
        );
      })}
    </Row>
  );
};

export default Wizard;
