import React, { useEffect } from 'react'
import NavBarLoggedIn from '../components/NavBarLoggedIn'
import useAuthStore from '../../store/useAuthStore'
import useGamesStore from '../../store/useGamesStore'
import { Navigate } from 'react-router-dom';
import { Loader } from 'lucide-react';
import DashboardComponent from '../components/DashboardComponent';

function DashboardPage() {

    const {authUser} = useAuthStore();
    const {isLoadingGames, games, getGames} = useGamesStore();

    useEffect(() => {
        getGames()
    }, [getGames])

    if (!authUser) {
        return <Navigate to={"/"}/>
    }

  return (
    <>
      <NavBarLoggedIn />
      {isLoadingGames ? <Loader className='animate-spin text-[100px]' /> : <DashboardComponent />}
    </>
  )
}

export default DashboardPage
