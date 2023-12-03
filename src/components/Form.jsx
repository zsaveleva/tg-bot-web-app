import { Formik } from 'formik'
import * as yup from 'yup'
import React from 'react'
import styled from 'styled-components'
import { DefaultInput } from './SearchBlock'
import { Flex, StyledOption, StyledSelect } from '../styles'
import { StyledButton } from './Item'
import { fetchAddCamp } from '../store/reducers/camps'
import { useDispatch } from 'react-redux'
import { setModal } from '../store/reducers/modal'

const StyledFormInput = styled(DefaultInput)`
  & {
     height: 36px;
     padding: 0 6px;
  }
`
const StyledLabel = styled('label')`
  & {
      font-size: 14px;
  }
`

const StyledErrorMsg = styled('p')`
  & {
      font-size: 12px;
      color: #b41111;
  }
`

const geoOptionsArr = ['Ленинградская область', 'Санкт-Петербург', 'Моcковская область', 'Москва', 'Республика Крым', 'Краснодарский край']
const taxOptionsArr = ['Не подключена', '50/50', 'Подключена']
const opfOptionsArr = ['Нет информации', 'ГБУ', 'КО']
const vacancyOptionsArr = ['Есть', 'Нет']

export const Form = () => {
  const dispatch = useDispatch()

  const validationSchema = yup.object().shape({
    name: yup.string().min(5, 'Слишком короткое название').required('Поле обязательно для заполнения'),
    geo: yup.string().required('Выберите значение'),
    address: yup.string().min(5, 'Слишком короткое название').required('Поле обязательно для заполнения'),
    person: yup.string().required('Поле обязательно для заполнения'),
    contacts: yup.string().required('Поле обязательно для заполнения'),
    tax: yup.string().required('Выберите значение'),
    opf: yup.string().required('Выберите значение'),
    comment: yup.string().min(5, 'Комментарий не может быть меньше пяти символов'),
    value: yup.string().required('Выберите значение'),
    summer: yup.string().min(6, 'Слишком короткое значение'),
    tematic: yup.string().min(6, 'Слишком короткое значение'),
    seasons: yup.number().typeError('Нужно указать число').required('Поле обязательно для заполнения'),
    feedback: yup.string().min(5, 'Отзыв не может быть меньше пяти символов').required('Поле обязательно для заполнения'),
  })

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          geo: '',
          address: '',
          person: '',
          contacts: '',
          tax: '',
          opf: '',
          comment: '',
          first: [
            {
              squad: '',
              quantity: ''
            }
          ],
          second: [
            {
              squad: '',
              quantity: ''
            }
          ],
          third: [
            {
              squad: '',
              quantity: ''
            }
          ],
          fourth: [
            {
              squad: '',
              quantity: ''
            }
          ],
          value: '',
          description: '',
          summer: '',
          tematic: '',
          seasons: '',
          feedback: ''
        }}
        validateOnBlur
        onSubmit={((values, { setSubmitting, resetForm }) => {
          try {
            dispatch(fetchAddCamp(values))
            setSubmitting(false)
            resetForm()
            dispatch(setModal(false))
          } catch (error) {
            console.error(error)
          }
        })}
        validationSchema={validationSchema}
      >
        {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
          <form>
            <Flex
              direction={'column'}
              gap={'4px'}
              mb={'16px'}
            >
              <StyledLabel htmlFor={'name'}>Название:</StyledLabel>
              <StyledFormInput
                bc={'var(--tg-theme-secondary-bg-color)'}
                border={touched.name && errors.name ? '1px solid #b41111' : '1px solid var(--tg-theme-secondary-bg-color)'}
                type={'text'}
                name={'name'}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {touched.name && errors.name && <StyledErrorMsg>{errors.name}</StyledErrorMsg>}
            </Flex>
            <Flex
              direction={'column'}
              gap={'4px'}
              mb={'16px'}
            >
              <StyledLabel htmlFor={'geo'}>Расположение:</StyledLabel>
              <StyledSelect
                height={'36px'}
                name={'geo'}
                value={values.gep}
                onChange={selectedOption => {
                  handleChange('geo')(selectedOption.target.value)
                }}>
                <StyledOption value={''}>Выбрать</StyledOption>
                {geoOptionsArr.map((el) => {
                  return (
                    <StyledOption key={el} value={el}>
                      {el}
                    </StyledOption>
                  )
                })}
                {touched.geo && errors.geo && <StyledErrorMsg>{errors.geo}</StyledErrorMsg>}
              </StyledSelect>
            </Flex>
            <Flex
              direction={'column'}
              gap={'4px'}
              mb={'16px'}
            >
              <StyledLabel htmlFor={'address'}>Адрес:</StyledLabel>
              <StyledFormInput
                bc={'var(--tg-theme-secondary-bg-color)'}
                border={touched.address && errors.address ? '1px solid #b41111' : '1px solid var(--tg-theme-secondary-bg-color)'}
                type={'text'}
                name={'address'}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.address}
              />
              {touched.address && errors.address && <StyledErrorMsg>{errors.address}</StyledErrorMsg>}
            </Flex>
            <Flex
              direction={'column'}
              gap={'4px'}
              mb={'16px'}
            >
              <StyledLabel htmlFor={'person'}>Контактное лицо:</StyledLabel>
              <StyledFormInput
                bc={'var(--tg-theme-secondary-bg-color)'}
                border={touched.person && errors.person ? '1px solid #b41111' : '1px solid var(--tg-theme-secondary-bg-color)'}
                type={'text'}
                name={'person'}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.person}
              />
              {touched.person && errors.person && <StyledErrorMsg>{errors.person}</StyledErrorMsg>}
            </Flex>
            <Flex
              direction={'column'}
              gap={'4px'}
              mb={'16px'}
            >
              <StyledLabel htmlFor={'contacts'}>Телефон/email:</StyledLabel>
              <StyledFormInput
                bc={'var(--tg-theme-secondary-bg-color)'}
                border={touched.contacts && errors.contacts ? '1px solid #b41111' : '1px solid var(--tg-theme-secondary-bg-color)'}
                type={'text'}
                name={'contacts'}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.contacts}
              />
              {touched.contacts && errors.contacts && <StyledErrorMsg>{errors.contacts}</StyledErrorMsg>}
            </Flex>
            <Flex
              direction={'column'}
              gap={'4px'}
              mb={'16px'}
            >
              <StyledLabel htmlFor={'tax'}>Наголовая льгота:</StyledLabel>
              <StyledSelect
                height={'36px'}
                name={'tax'}
                value={values.tax}
                onChange={selectedOption => {
                  handleChange('tax')(selectedOption.target.value)
                }}>
                <StyledOption value={''}>Выбрать</StyledOption>
                {taxOptionsArr.map((el) => {
                  return (
                    <StyledOption key={el} value={el}>
                      {el}
                    </StyledOption>
                  )
                })}
              </StyledSelect>
              {touched.tax && errors.tax && <StyledErrorMsg>{errors.tax}</StyledErrorMsg>}
            </Flex>
            <Flex
              direction={'column'}
              gap={'4px'}
              mb={'16px'}
            >
              <StyledLabel htmlFor={'opf'}>ОПФ:</StyledLabel>
              <StyledSelect
                height={'36px'}
                name={'opf'}
                value={values.opf}
                onChange={selectedOption => {
                  handleChange('opf')(selectedOption.target.value)
                }}>
                <StyledOption value={''}>Выбрать</StyledOption>
                {opfOptionsArr.map((el) => {
                  return (
                    <StyledOption key={el} value={el}>
                      {el}
                    </StyledOption>
                  )
                })}
              </StyledSelect>
              {touched.opf && errors.opf && <StyledErrorMsg>{errors.opf}</StyledErrorMsg>}
            </Flex>
            <Flex
              direction={'column'}
              gap={'4px'}
              mb={'16px'}
            >
              <StyledLabel htmlFor={'comment'}>Комментарий:</StyledLabel>
              <StyledFormInput
                bc={'var(--tg-theme-secondary-bg-color)'}
                border={touched.comment && errors.comment ? '1px solid #b41111' : '1px solid var(--tg-theme-secondary-bg-color)'}
                type={'text'}
                name={'comment'}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.comment}
              />
              {touched.comment && errors.comment && <StyledErrorMsg>{errors.comment}</StyledErrorMsg>}
            </Flex>
            <Flex
              direction={'column'}
              gap={'4px'}
              mb={'16px'}
            >
              <StyledLabel htmlFor={'value'}>Свободные ставки:</StyledLabel>
              <Flex
                align={'center'}
                gap={'10px'}
              >
                <StyledSelect
                  width={'100%'}
                  height={'36px'}
                  name={'value'}
                  value={values.value}
                  onChange={selectedOption => {
                    handleChange('value')(selectedOption.target.value)
                  }}>
                  <StyledOption value={''}>Выбрать</StyledOption>
                  {vacancyOptionsArr.map((el) => {
                    return (
                      <StyledOption key={el} value={el}>
                        {el}
                      </StyledOption>
                    )
                  })}
                </StyledSelect>
                {values.value == 'Есть' &&
                  <StyledFormInput
                    placeholder='Количество'
                    bc={'var(--tg-theme-secondary-bg-color)'}
                    border={'1px solid var(--tg-theme-secondary-bg-color)'}
                    width={'100%'}
                    type={'text'}
                    name={'description'}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.description}
                  />}
              </Flex>
              {touched.value && errors.value && <StyledErrorMsg>{errors.value}</StyledErrorMsg>}
            </Flex>
            <Flex
              direction={'column'}
              gap={'4px'}
              mb={'16px'}
            >
              <StyledLabel htmlFor={'summer'}>Даты летних смен:</StyledLabel>
              <StyledFormInput
                bc={'var(--tg-theme-secondary-bg-color)'}
                border={touched.summer && errors.summer ? '1px solid #b41111' : '1px solid var(--tg-theme-secondary-bg-color)'}
                type={'text'}
                name={'summer'}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.summer}
              />
              {touched.summer && errors.summer && <StyledErrorMsg>{errors.summer}</StyledErrorMsg>}
            </Flex>
            <Flex
              direction={'column'}
              gap={'4px'}
              mb={'16px'}
            >
              <StyledLabel htmlFor={'tematic'}>Даты межсезонок:</StyledLabel>
              <StyledFormInput
                bc={'var(--tg-theme-secondary-bg-color)'}
                border={touched.tematic && errors.tematic ? '1px solid #b41111' : '1px solid var(--tg-theme-secondary-bg-color)'}
                type={'text'}
                name={'tematic'}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.tematic}
              />
              {touched.tematic && errors.tematic && <StyledErrorMsg>{errors.tematic}</StyledErrorMsg>}
            </Flex>
            <Flex
              direction={'column'}
              gap={'4px'}
              mb={'16px'}
            >
              <StyledLabel htmlFor={'seasons'}>Отработано сезонов:</StyledLabel>
              <StyledFormInput
                bc={'var(--tg-theme-secondary-bg-color)'}
                border={touched.seasons && errors.seasons ? '1px solid #b41111' : '1px solid var(--tg-theme-secondary-bg-color)'}
                type={'text'}
                name={'seasons'}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.seasons}
              />
              {touched.seasons && errors.seasons && <StyledErrorMsg>{errors.seasons}</StyledErrorMsg>}
            </Flex>
            <Flex
              direction={'column'}
              gap={'4px'}
              mb={'16px'}
            >
              <StyledLabel htmlFor={'feedback'}>Отзыв:</StyledLabel>
              <StyledFormInput
                bc={'var(--tg-theme-secondary-bg-color)'}
                border={touched.feedback && errors.feedback ? '1px solid #b41111' : '1px solid var(--tg-theme-secondary-bg-color)'}
                type={'text'}
                name={'feedback'}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.feedback}
              />
              {touched.feedback && errors.feedback && <StyledErrorMsg>{errors.feedback}</StyledErrorMsg>}
            </Flex>
            <StyledButton
              bc={(!isValid && !dirty) ? 'var(--tg-theme-secondary-bg-color)' : 'var(--tg-theme-link-color)'}
              cursor={!isValid && 'default'}
              border={'none'}
              disabled={!isValid}
              onClick={handleSubmit}
              type={'submit'}
            >
              Сохранить
            </StyledButton>
          </form>
        )}
      </Formik>
    </>
  )
}
