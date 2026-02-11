import { type JSX } from 'react';

import { IoMdFolderOpen } from 'react-icons/io';

import { IoHomeOutline } from 'react-icons/io5';

export  const dashboard_itens = [
  {
    id: 1,
    icon: (accessibility: any) => <IoHomeOutline size={18} {...accessibility} />,
    title: 'Início',
    navLabel: 'Início',
    uri: '/'
  },
  {
    id: 2,
    icon: (accessibility: any) => <IoMdFolderOpen size={18} {...accessibility} />,
    title: 'Ingressantes',
    navLabel: 'Cadastro de novos ingressantes',
    uri: '/ingressantes'
  },
] as {
  id: number;
  icon: (accessibility: any) => JSX.Element;
  title: string;
  navLabel: string;
  uri: string;
}[]