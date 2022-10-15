import React from 'react'
import { Icon, Input } from '@ui-kitten/components'
import { TouchableWithoutFeedback, Text } from 'react-native';
import { styles } from './styles';
import { forwardRef } from 'react';

interface IPasswordInputProps {
  value: string
  setValue: Function
  caption: string
  isConfirmation: boolean
  onSubmitEditing: Function | undefined
  returnKeyGo: boolean
  isNew: boolean
}

export const PasswordInput = forwardRef(({ caption, setValue, value, isConfirmation, onSubmitEditing, returnKeyGo, isNew }: IPasswordInputProps, ref: any) => {
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  }

  const renderIcon = (props: any) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  );

  const setPlaceholder = () => {
    if (isConfirmation) {
      return isNew ? 'Confirme sua nova senha' : 'Confirme sua senha*'
    } else {
      return isNew ? 'Digite sua nova senha' : 'Digite sua senha*'
    }
  }

  return (
    <Input
      ref={ref}
      style={styles.input}
      placeholder={setPlaceholder()}
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
