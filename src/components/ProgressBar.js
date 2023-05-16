/* eslint-disable prettier/prettier */
import React from 'react';
import * as Progress from 'react-native-progress';
export default function ProgressBar({value}) {
  return (
    <Progress.Bar
      color="#05BC61"
      unfilledColor="#CDF2DF"
      progress={value}
      width={null}
      borderRadius={0}
      borderWidth={0}
      height={10}
      animated={true}
    />
  );
}
