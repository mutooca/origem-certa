package com.pdc.origem_certa.entity;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "produtor")
public class Produtor extends Utilizador{
    @Column(nullable = false)
    private String nif;

    @Column(nullable = false)
    private String provincia;

    @Column(nullable = false)
    private String municipio;

    @Column(nullable = false)
    private String bairro;

    @Column(nullable = false)
    private String rua;

    @OneToMany(mappedBy = "produtor")
    private List<Registo> registos;

}
