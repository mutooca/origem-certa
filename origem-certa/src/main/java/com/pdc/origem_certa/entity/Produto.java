package com.pdc.origem_certa.entity;

import java.time.LocalDate;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "produto")
public class Produto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_produto;

    @Column(nullable = false)
    private String nome;

    @Column(nullable = false)
    private int quantidade;

    @Column(nullable = false)
    private LocalDate data_producao;

    @Column(nullable = false)
    private LocalDate data_validade;

    @Column(nullable = false)
    private String categoria;

    @Column(nullable = false)
    private String descricao;

    @Column(nullable = false)
    private String estado;

    @Column(nullable = false)
    private String unidade;

    @Column(nullable = false)
    private String metodo_prooducao;

    @Column(nullable = false)
    private String condicoes_higiene;

    @Column(nullable = false)
    private String equipamento_insumo;

    @OneToMany(mappedBy = "produto")
    private List<Registo> registos;

    @ManyToOne
    @JoinColumn(name = "destino_id")
    private Destino destino;

    @OneToMany(mappedBy = "produto")
    private List<Consulta> consultas;

    @OneToOne(mappedBy = "produto")
    private Qrcode qrcode;
}
