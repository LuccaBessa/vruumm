import { Icon, Input, Layout } from '@ui-kitten/components';
import React, { useEffect, useState } from 'react'
import { FlatList, RefreshControl } from 'react-native';
import { Laoder } from '../../../../components';
import { CarService } from '../../../../services';
import { Car } from '../../../../types';
import { CarDetailModal, CarCard } from '../../components';
import { styles } from './styles';

export const Home = () => {
  const [search, setSearch] = useState<string>('');
  const [cars, setCars] = useState<Car[]>([]);
  const [selectedCar, setSelectedCar] = useState<Car | undefined>(undefined);
  const [visible, setVisible] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false);
  const [refreshing, setRefreshing] = React.useState<boolean>(false);

  useEffect(() => {
    loadCars(search)
  }, [])

  const Item = ({ item }: { item: any }) => (
    <CarCard
      key={'car' + item.codigo}
      id={item.codigo}
      model={item.modelo}
      image={item.imagem}
      onPressFunction={() => onClickCar(item)}
    />
  )

  const renderItem = ({ item }: { item: any }) => <Item item={item} />

  const loadCars = async (search: string) => {
    setLoading(true)
    setCars(await CarService.searchCars(search))
    setLoading(false)
  }

  const onClickCar = (car: Car) => {
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
      <Input
        style={styles.searchInput}
        placeholder="Pesquisar..."
        accessoryLeft={searchIcon}
        size='large' value={search}
        onChangeText={text => setSearch(text)} returnKeyType='search'
        onSubmitEditing={() => loadCars(search)}
      />
      {loading && !refreshing ? <Laoder /> :
        <FlatList
          data={cars}
          renderItem={renderItem}
          numColumns={2}
          keyExtractor={(item) => item.codigo.toString()}
          ListEmptyComponent={<Layout />}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              colors={['#c8004c']}
            />
          }
        />
      }
      <CarDetailModal visible={visible} setVisible={() => setVisible(false)} car={selectedCar} />
    </Layout>
  )
}
