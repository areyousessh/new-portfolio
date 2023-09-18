"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';
import RepoFrame from '@/components/repoFrame/repoFrame';
import Loading from '@/components/loading/loading';

type GithubData = {
  avatar_url: string;
  name: string;
  bio: string;
  hireable: boolean;
  location: string;
};

type GithubRepos = {
    name: string;
    html_url: string;
    language: string | null;
}

export default function Projects() {
  const [data, setData] = useState<GithubData | null>(null);
  const [repos, setRepos] = useState<GithubRepos[]>([])

  async function getData() {
    try {
      const response = await fetch('https://api.github.com/users/areyousessh');
      if (!response.ok) {
        throw new Error('Ocorreu uma falha ao buscar os dados');
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error(error);
    }
  }

  async function getRepos() {
    try {
      const response = await fetch('https://api.github.com/users/areyousessh/repos');
      if (!response.ok) {
        throw new Error('Ocorreu uma falha ao buscar os dados');
      }
      const jsonData = await response.json();
      setRepos(jsonData);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getData();
    getRepos()
  }, []);

  return (
    <main className='flex flex-col items-center justify-center mt-20'>
      <section className='flex flex-col items-center justify-center'>
        {data && (
            <>
                <Image className='rounded-full border-2 border-cyan-500' src={data.avatar_url} alt='imagem de perfil do github' width={100} height={100} />
                <p className='font-bold mt-5 dark:text-cyan-500'>{data.name}</p>
                <p className='font-bold mt-3 dark:text-cyan-500'>{data.bio}</p>
                    {
                        data.hireable === true ? 
                        <div className='flex items-center'>
                            <p className='font-bold dark:text-cyan-500'>Open to work</p>
                        <div className='w-3 h-3 rounded-full border-2 bg-green-500 ml-2'/>
                        </div> : 
                        <div className='flex items-center'>
                            <p className='font-bold dark:text-cyan-500'>Working</p>
                            <div className='w-3 h-3 rounded-full border-2 bg-red-700 ml-2'/>
                        </div>
                    }
                    <div className='flex items-center justify-center'>
                        <p className='font-bold dark:text-cyan-500'>{data.location}</p>
                    </div>
            </>
        )}
      </section>
      {repos.length === 0 ? 
      <Loading/> : 
      <section className='grid grid-cols-3 gap-4 mt-10 items-center justify-center'>
        {repos.map((repo, index) => (
          <RepoFrame key={index} name={repo.name} html_url={repo.html_url} language={repo.language}/>
        ))}
      </section>
      }
      
    </main>
  );
}