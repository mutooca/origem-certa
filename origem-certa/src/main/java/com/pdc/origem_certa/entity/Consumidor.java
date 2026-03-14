package com.pdc.origem_certa.entity;

import java.util.List;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "consumidor")
public class Consumidor extends Utilizador{
    @OneToMany(mappedBy = "consumidor")
    private List<Consulta> consultas;
}
