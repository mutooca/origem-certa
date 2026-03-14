package com.pdc.origem_certa.entity;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "destino")
public class Destino {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_destino;

    @Column(nullable = false)
    private String nome;

    @Column(nullable = false)
    private String telefone;

    @Column(nullable = false)
    private String provincia;

    @Column(nullable = false)
    private String municipio;

    @Column(nullable = false)
    private String bairro;

    @Column(nullable = false)
    private String rua;

    @OneToMany(mappedBy = "destino")
    private List<Produto> produtos;
}
