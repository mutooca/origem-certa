package com.pdc.origem_certa.entity;

import java.time.LocalDate;
import org.hibernate.annotations.CreationTimestamp;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "registo")
public class Registo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_registo;

    @CreationTimestamp
    private LocalDate data_registo;

    @ManyToOne
    @JoinColumn(name = "produtor_id")
    private Produtor produtor;

    @ManyToOne
    @JoinColumn(name = "produto_id")
    private Produto produto;
}
