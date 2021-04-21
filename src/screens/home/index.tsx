import React, { useEffect, useState } from 'react'
import { Icon, Input, Layout } from '@ui-kitten/components'
import { styles } from './styles'
import { RefreshControl, ScrollView } from 'react-native';
import { CarCard } from '../../components/CarCard';
import { searchCars } from '../../api/searchCars';
import { Laoder } from '../../components/Loader';

export function Home() {
  const [search, setSearch] = useState<string>('');
  const [cars, setCars] = useState([]);
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
    if (cars) {
      setRenderedCars(cars.map((car: any) => <CarCard key={'car' + car.codigo} id={car.codigo} model={car.modelo} image={car.imagem} onPressFunction={(id: any) => console.log(`id`, id)} />))
    }
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
    </Layout>
  )
}
