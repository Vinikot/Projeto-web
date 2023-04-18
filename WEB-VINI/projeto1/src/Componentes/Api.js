import React from "react";
import { useForm } from "react-hook-form";

function Api() {
  const { register, handleSubmit, setValue, setFocus } = useForm();

  const onSubmit = (e) => {
    console.log(e);
  };

  const checkCep = (e) => {
    const cep = e.target.value.replace(/\D/g, "");
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        setValue("rua", data.logradouro);
        setValue("bairro", data.bairro);
        setValue("cidade", data.localidade);
        setValue("estado", data.uf);
        setFocus("numero");
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="Api">
      <h1>Comsumindo uma Api</h1>
      <br />
      <label>
        CEP: <input type="text" {...register("cep")} onBlur={checkCep} />
      </label>
      <br />

      <label>
        RUA: <input type="text" {...register("rua")} />
      </label>
      <br />

      <label>
        NÚMERO: <input type="text" {...register("numero")} />
      </label>
      <br />

      <label>
        BAIRRO: <input type="text" {...register("bairro")} />
      </label>
      <br />

      <label>
        CIDADE: <input type="text" {...register("cidade")} />
      </label>
      <br />

      <label>
        ESTADO: <input type="text" {...register("estado")} />
      </label>
      <br />
      <button type="submit" id="enviar">
        Enviar
      </button>
    </form>
  );
}
export default Api;
