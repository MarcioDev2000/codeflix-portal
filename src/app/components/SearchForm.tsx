'use client';
import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

interface ISearchFormProps {
    searchTerm: string;
    onSearch: (event: React.FormEvent<HTMLFormElement>) => void;
    onSearchTermChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function SearchForm({
    searchTerm, 
    onSearch,
    onSearchTermChange,
}: ISearchFormProps): React.ReactElement {
    return (
            <form onSubmit={onSearch} className='flex items-center space-x-2'>
      <button type='submit'>
        <MagnifyingGlassIcon className='h-6 w-6 text-gray-400' />
      </button>
      <input
        type='search'
        id='search'
        name='search'
        placeholder='Search'
        value={searchTerm}
        onChange={onSearchTermChange}
        className='bg-transparent text-white placeholder-white outline-none'
      />
    </form>    
    );
}