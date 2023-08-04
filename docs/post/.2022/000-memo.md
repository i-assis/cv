# Table memo!

<html>
  <style>
  h3 {
    margin: auto;
    text-align: center;
    padding: 10px;
    color: 	#F8F8F8;
  }
  .table {
    background-color: #F8F8F8;
    margin: auto;
    width: 350px;
    border-collapse: separate;
    display: block;
    overflow-x: scroll;
  }
  thead,
  tbody {
    display: inline-block;
  }
  thead {
    position: sticky;
    top: 1px;
    z-index: 2;
  }
  tbody {
    height: 400px;
  }
  th {
    background-color: #32cd32;  
  }
  td,
  th {
    min-width: 150px;
    max-width: 250px;
    word-wrap: break-word;
  }
  .fixed {
    position: sticky;
    width: 5em;
    left: 0;
    top: auto;
    z-index: 2;
    background-color: #CD7F32;
  }
  .fixedcorner {
    position: sticky;
    width: 5em;
    left: 0;
    top: auto;
    z-index: 999;
    background-color: #145214;
  }
  td:not(.fixed) {
    z-index: 0;
  }
  </style>
  <div class="conatiner">
    <table class="table table-bordered">
      <thead>
        <tr>
          <th class="fixedcorner"></th>
          <th colspan="6" style="text-align:center">Tipo de Operação</th>
        </tr>
        <tr>
          <th style="text-align:center">Step #</th>
          <th style="text-align:center">Where</th>
          <th style="text-align:center">Code or Command</th>
          <th style="text-align:center">Code or Command</th>
          <th style="text-align:center">Exibir</th>
          <th style="text-align:center">Excluir</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th class="fixed">#0001</th>
          <td><button>command line</button></td>
          <td><button class="btn btn-secondary fs-2">rails new crypto_wallet</button></td>
          <td><button class="btn btn-secondary fs-2">super</button></td>
          <td><button class="btn btn-secondary fs-2">super</button> <br /> <button class="btn btn-secondary fs-2">admin</button> <br /> <button class="btn btn-secondary fs-2">colaborador</button></td>
          <td> </td>        
        </tr>
        <tr>
          <th class="fixed">Categorias</th>
          <td><button class="btn btn-secondary fs-2">super</button></td>
          <td><button class="btn btn-secondary fs-2">super</button></td>
          <td><button class="btn btn-secondary fs-2">super</button></td>
          <td><button class="btn btn-secondary fs-2">super</button></td>
          <td><button class="btn btn-secondary fs-2">super</button></td>        
        </tr>
        <tr>
          <th class="fixed">Plantas</th>
          <td><button class="btn btn-secondary fs-2">super</button></td>
          <td><button class="btn btn-secondary fs-2">super</button></td>
          <td><button class="btn btn-secondary fs-2">super</button></td>
          <td><button class="btn btn-secondary fs-2">super</button></td>
          <td><button class="btn btn-secondary fs-2">super</button></td>        
        </tr>
        <tr>
          <th class="fixed">Produtos</th>
          <td><button class="btn btn-secondary fs-2">super</button> <br /> <button class="btn btn-secondary fs-2">admin</button></td>
          <td><button class="btn btn-secondary fs-2">super</button> <br /> <button class="btn btn-secondary fs-2">admin</button></td>
          <td><button class="btn btn-secondary fs-2">super</button> <br /> <button class="btn btn-secondary fs-2">admin</button></td>
          <td><button class="btn btn-secondary fs-2">super</button> <br /> <button class="btn btn-secondary fs-2">admin</button> <br /> <button class="btn btn-secondary fs-2">colaborador</button></td>
          <td><button class="btn btn-secondary fs-2">super</button> <br /> <button class="btn btn-secondary fs-2">admin</button></td>        
        </tr>
        <tr>
          <th class="fixed">Unidades</th>
          <td><button class="btn btn-secondary fs-2">super</button> <br /> <button class="btn btn-secondary fs-2">admin</button></td>
          <td><button class="btn btn-secondary fs-2">super</button> <br /> <button class="btn btn-secondary fs-2">admin</button> <br /> <button class="btn btn-secondary fs-2">colaborador</button></td>
          <td><button class="btn btn-secondary fs-2">super</button> <br /> <button class="btn btn-secondary fs-2">admin</button></td>
          <td><button class="btn btn-secondary fs-2">super</button> <br /> <button class="btn btn-secondary fs-2">admin</button> <br /> <button class="btn btn-secondary fs-2">colaborador</button></td>
          <td><button class="btn btn-secondary fs-2">super</button> <br /> <button class="btn btn-secondary fs-2">admin</button></td>
        </tr>
        <tr>
          <th class="fixed">Clientes</th>
          <td>Mangabeira</td>
          <td><button class="btn btn-secondary fs-2">super</button> <br /> <button class="btn btn-secondary fs-2">admin</button> <br /> <button class="btn btn-secondary fs-2">colaborador</button></td>
          <td><button class="btn btn-secondary fs-2">super</button> <br /> <button class="btn btn-secondary fs-2">admin</button> <br /> <button class="btn btn-secondary fs-2">colaborador</button></td>
          <td><button class="btn btn-secondary fs-2">super</button> <br /> <button class="btn btn-secondary fs-2">admin</button> <br /> <button class="btn btn-secondary fs-2">colaborador</button></td>
          <td><button class="btn btn-secondary fs-2">super</button> <br /> <button class="btn btn-secondary fs-2">admin</button> </td>       
        </tr>
        <tr>
          <th class="fixed">Personalização</th>
          <td> </td>
          <td><button class="btn btn-secondary fs-2">super</button> <br /> <button class="btn btn-secondary fs-2">admin</button> <br /> <button class="btn btn-secondary fs-2">colaborador</button> </td>
          <td><button class="btn btn-secondary fs-2">super</button> <br /> <button class="btn btn-secondary fs-2">admin</button> <br /> <button class="btn btn-secondary fs-2">colaborador</button> <br /> <button class="btn btn-secondary fs-2">cliente</button></td>
          <td><button class="btn btn-secondary fs-2">super</button> <br /> <button class="btn btn-secondary fs-2">admin</button> <br /> <button class="btn btn-secondary fs-2">colaborador</button> <br /> <button class="btn btn-secondary fs-2">cliente</button></td>
          <td><button class="btn btn-secondary fs-2">super</button></td>
        </tr>
        <tr>
          <th class="fixed"> 9 </th>
          <td><button class="btn btn-secondary fs-2">super</button> <br /> <button class="btn btn-secondary fs-2">admin</button></td>
          <td><button class="btn btn-secondary fs-2">super</button> <br /> <button class="btn btn-secondary fs-2">admin</button></td>
          <td><button class="btn btn-secondary fs-2">super</button> <br /> <button class="btn btn-secondary fs-2">admin</button></td>
          <td><button class="btn btn-secondary fs-2">super</button> <br /> <button class="btn btn-secondary fs-2">admin</button> <br /> <button class="btn btn-secondary fs-2">colaborador</button> <br /> <button class="btn btn-secondary fs-2">cliente</button></td>
          <td><button class="btn btn-secondary fs-2">super</button></td>        
        </tr>
        <tr>
          <th class="fixed"> 10 </th>
          <td><button class="btn btn-secondary fs-2">super</button> <br /> <button class="btn btn-secondary fs-2">admin</button></td>
          <td><button class="btn btn-secondary fs-2">super</button> <br /> <button class="btn btn-secondary fs-2">admin</button></td>
          <td><button class="btn btn-secondary fs-2">super</button> <br /> <button class="btn btn-secondary fs-2">admin</button></td>
          <td><button class="btn btn-secondary fs-2">super</button> <br /> <button class="btn btn-secondary fs-2">admin</button> <br /> <button class="btn btn-secondary fs-2">colaborador</button> <br /> <button class="btn btn-secondary fs-2">cliente</button></td>
          <td><button class="btn btn-secondary fs-2">super</button></td>        
        </tr>      
      </tbody>
    </table>
  </div>
</html>


&nbsp;

### Snippet S0001:

```json
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```

### Snippet S0002:

```json
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```

### Snippet S0003:

```ruby
def index
  puts "hello world"
end
```
