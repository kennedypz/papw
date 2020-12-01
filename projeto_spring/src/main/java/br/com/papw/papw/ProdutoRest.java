package br.com.papw.papw;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ProdutoRest{

    @Autowired
    private ProdutoRepository produtoRepository;


    @PostMapping("/produto")
    public ResponseEntity<Produto> salvar(@RequestBody Produto produto){
        Produto retorno = produtoRepository.save(produto);
        return ResponseEntity.ok(retorno);
    }

    @PutMapping("/produto")
    public ResponseEntity<Produto> atualizar(@RequestBody Produto produto){
        if(produto.getId()==0){
            return ResponseEntity.badRequest().build();
        }
        Produto retorno = produtoRepository.save(produto);
        return ResponseEntity.ok(retorno);
    }



    @GetMapping("/produto")
    public ResponseEntity<List<Produto>> getProdutos(){
        return ResponseEntity.ok(produtoRepository.findAll());
    }

    @GetMapping("/produto/{id}")
    public ResponseEntity<Produto> getProdutoByID(@PathVariable("id") int id){

        Produto retorno = produtoRepository.findById(id).get();
        if(retorno==null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(retorno);
    }

    @DeleteMapping("/produto/{id}")
    public ResponseEntity<Produto> deleteProdutoByID(@PathVariable("id") int id){

        Produto retorno = produtoRepository.findById(id).get();
        if(retorno==null){
            return ResponseEntity.notFound().build();
        }
        //produtoRepository.deleteById(id);
        produtoRepository.delete(retorno);

        return ResponseEntity.ok(retorno);
    }


}
