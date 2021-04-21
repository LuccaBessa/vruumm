import React, { useEffect, useState } from 'react'
import { Icon, Input, Layout, Text } from '@ui-kitten/components'
import { styles } from './styles'
import { RefreshControl, ScrollView, View } from 'react-native';
import { CarCard } from '../../components/CarCard';
import { searchCars } from '../../api/searchCars';
import { Laoder } from '../../components/Loader';
import { CarDetail } from '../../components/CarDetail';

export function Home() {
  const [search, setSearch] = useState<string>('');
  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState()
  const [visible, setVisible] = useState<boolean>(false)
  const [renderedCars, setRenderedCars] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [refreshing, setRefreshing] = React.useState<boolean>(false);

  useEffect(() => {
    loadCars(search)
  }, [])

  useEffect(() => {
    renderCars()
  }, [cars])


  const loadCars = async (search: string) => {
    setLoading(true)
    let resp = await searchCars(search)
    setCars(resp.corpo)
    setLoading(false)
  }

  const renderCars = () => {
    if (cars && cars.length > 0) {
      setRenderedCars(cars.map((car: any) => <CarCard key={'car' + car.codigo} id={car.codigo} model={car.modelo} image={car.imagem} onPressFunction={() => onClickCar(car)} />))
    } else {
      setRenderedCars(
        <View style={styles.noCarsView}>
          <Text style={styles.noCarsText} category='h5'>Nenhum Carro</Text>
        </View>
      )
    }
  }

  const onClickCar = (car: any) => {
    setSelectedCar(car)
    setVisible(true)
  }

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    await loadCars(search)
    setRefreshing(false);
  }, [refreshing]);

  const searchIcon = (props: any) => (
    <Icon {...props} name='search-outline' />
  );

  return (
    <Layout style={styles.container}>
      <Input style={styles.searchInput} placeholder="Pesquisar..." accessoryLeft={searchIcon} size='large' value={search} onChangeText={text => setSearch(text)} returnKeyType='search' onSubmitEditing={() => loadCars(search)} />
      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContainer} refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={['#c8004c']} />
      }>
        {loading && !refreshing ? <Laoder /> : renderedCars}
      </ScrollView>
      <CarDetail visible={visible} setVisible={() => setVisible(false)} car={selectedCar} />
    </Layout>
  )
}
