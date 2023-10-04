'use client';

import { axiosInstance } from '@/api/axiosSetting';
import { useState } from 'react';
import { useQuery } from 'react-query';

interface CurrentRatingType {
  rating: number;
}

export default function CurrentRating() {
  const currentRatingAxios: () => Promise<CurrentRatingType> = async () => {
    const response = await axiosInstance.get<CurrentRatingType>(
      `/tests/current-rating`,
      {
        withCredentials: true,
      },
    );
    return response.data;
  };

  const { isLoading, error, data } = useQuery<CurrentRatingType>(
    'currentRatingData',
    currentRatingAxios,
    {
      staleTime: 987654321,
    },
  );

  if (isLoading) {
    return <></>;
  }

  if (error) {
    return <div>Error...</div>;
  }

  return <div className="text-[1.3rem] font-bold">{data?.rating}</div>;
}
