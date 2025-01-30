import * as Collapsible from '@radix-ui/react-collapsible';
import { ArrowBendDownLeft } from 'phosphor-react';
import clsx from 'clsx';
import { LinkContent } from '../link/link';
import { useEffect, useState } from 'react';
import { fetchPermissionsByRoleId, decodeToken } from '../../services/check_permission';

export function Sidebar() {
  const isMacOS = process.platform === 'darwin';
  const [allowedPermissions, setAllowedPermissions] = useState<string[]>([]);
  const [decodedToken, setDecodedToken] = useState<any>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      decodeToken(token).then((res) => {
        console.log('Token decodificado:', res);
        setDecodedToken(res);
      });
    }
  }, []);

  useEffect(() => {
    if (decodedToken) {
      const role = decodedToken.data.role;

      fetchPermissionsByRoleId(role).then((permissions) => {
        console.log('Permissões carregadas:', permissions);
        setAllowedPermissions(permissions);
      });
    }
  }, [decodedToken]); // Esse useEffect só executa quando decodedToken mudar

  const links = [
    { to: '/', children: 'Home', permission: 'Dashboard Home' },
    { to: '/boxware', children: 'Dashboard Boxware', permission: 'Dashboard Boxware' },
    { to: '/comercial', children: 'Dashboard Comercial', permission: 'Dashboard Comercial' },
    { to: '/produtos', children: 'Dashboard Produtos', permission: 'Dashboard Produtos' },
    { to: '/usuarios', children: 'Gerenciamento de usuários', permission: 'Gerenciamento de usuários' },
    { to: '/permissao', children: 'Gerenciamento de Permissão', permission: 'Gerenciamento de Permissão' },
  ];

  return (
    <Collapsible.Content className="bg-orange-500 flex-shrink-0 border-r border-orange-500 h-screen relative group overflow-hidden data-[state=open]:animate-slideIn data-[state=closed]:animate-slideOut">
      <Collapsible.Trigger
        className={clsx(
          'absolute h-7 w-7 right-4 z-[99] text-white hover:scale-105 duration-200 inline-flex items-center justify-center',
          {
            'top-[1.125rem]': isMacOS,
            'top-6': !isMacOS,
          }
        )}
      >
        <ArrowBendDownLeft className="h-7 w-7" />
      </Collapsible.Trigger>

      <div
        className={clsx(
          'flex-1 flex flex-col h-full gap-8 w-[250px] transition-opacity group-data-[state=open]:opacity-100 group-data-[state=closed]:opacity-0 duration-200',
          {
            'pt-6': !isMacOS,
          }
        )}
      >
        <nav className="flex mx-2 flex-col gap-8 text-white">
          <div className="flex flex-col gap-2">
            <div className="text-white font-semibold uppercase mb-2 ml-2">MENU</div>
          </div>

          <section className="flex flex-col gap-px">
            {allowedPermissions.length > 0 ? (
              links
                .filter((link) => allowedPermissions.includes(link.permission))
                .map((link) => (
                  <LinkContent key={link.to} to={link.to}>
                    {link.children}
                  </LinkContent>
                ))
            ) : (
              <p className="text-white text-center">Carregando...</p>
            )}
          </section>
        </nav>
      </div>
    </Collapsible.Content>
  );
}

