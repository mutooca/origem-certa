package com.pdc.origem_certa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.pdc.origem_certa.entity.Produto;

public interface ProdutoRepository extends JpaRepository<Produto, Long>{

}
