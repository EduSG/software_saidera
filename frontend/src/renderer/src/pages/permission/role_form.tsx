import { useState } from "react";


export default function RoleForm({ onSubmit }: (role: string) => void){

  const [role, setRole] = useState('')

  const handleSubmit(e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(role);
  }

  return (


  )

}


















