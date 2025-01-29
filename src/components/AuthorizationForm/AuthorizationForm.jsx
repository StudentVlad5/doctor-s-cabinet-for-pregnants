import { useState } from 'react';
import {
    AuthorizationSection, AuthorizationContainer, AuthorizationFormItem, Titleline, Input, ButtonSubmit
  } from './AuthorizationForm.styled';
import { saveToStorage } from 'services/localStorService';

  
  export const AuthorizationForm = () => {
    const [authorization_id, setAuthorization_id] = useState('');

    const handleSubmit = () => {
        saveToStorage("authorization_id", authorization_id);
        setAuthorization_id('');
    }

    return (
      <AuthorizationSection>
        <AuthorizationContainer>
            <AuthorizationFormItem onSubmit={handleSubmit}>
                <Titleline htmlFor="authorization_id" aria-label="Authorization_id">Авторизация</Titleline>
                <Input type="text" 
                    id="authorization_id" 
                    name="authorization_id" 
                    value={authorization_id} 
                    placeholder="Введите идентификатор"
                    onChange={e => {setAuthorization_id(e.target.value)}}/>
                <ButtonSubmit type="submit" aria-label="Submit">ВХОД</ButtonSubmit>
            </AuthorizationFormItem>
        </AuthorizationContainer>
      </AuthorizationSection>
    );
  };
  