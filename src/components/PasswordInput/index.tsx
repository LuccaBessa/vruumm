import React from 'react'
import { Icon, Input } from '@ui-kitten/components'
import { TouchableWithoutFeedback, Text } from 'react-native';
import { styles } from './styles';
import { Props } from './types';
import { forwardRef } from 'react';

export const PasswordInput = forwardRef(({ caption, setValue, value, isConfirmation, onSubmitEditing, returnKeyGo }: Props, ref: any) => {
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  }

  const renderIcon = (props: any) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  );

  return (
    <Input
      ref={ref}
      style={styles.input} placeholder={isConfirmation ? 'Confirme sua senha' : 'Digite sua senha'}
      value={value}
      caption={() => <Text style={{ color: 'white' }}>{caption}</Text>}
      size='large'
      onChangeText={text => setValue(text)}
      accessoryRight={renderIcon} secureTextEntry={secureTextEntry}
      onSubmitEditing={() => onSubmitEditing && onSubmitEditing()}
      returnKeyType={returnKeyGo ? 'go' : 'default'}
    />
  )
})
