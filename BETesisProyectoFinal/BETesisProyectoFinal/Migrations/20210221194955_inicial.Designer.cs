﻿// <auto-generated />
using System;
using BEProyectoFinal;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace BEProyectoFinal.Migrations
{
    [DbContext(typeof(AplicationDBContext))]
    [Migration("20210221194955_inicial")]
    partial class inicial
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.4")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("BEProyectoFinal.Models.Departamentos", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("Descripcion")
                        .IsRequired()
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.HasKey("Id");

                    b.ToTable("Departamentos");
                });

            modelBuilder.Entity("BEProyectoFinal.Models.Roles", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("Descripcion")
                        .IsRequired()
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.HasKey("Id");

                    b.ToTable("Roles");
                });

            modelBuilder.Entity("BEProyectoFinal.Models.TipoPlanillas", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("Descripcion")
                        .IsRequired()
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.HasKey("Id");

                    b.ToTable("TipoPlanillas");
                });

            modelBuilder.Entity("BEProyectoFinal.Models.Usuarios", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<string>("NombreUsuario")
                        .IsRequired()
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<int>("RolID")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("RolID");

                    b.ToTable("Usuarios");
                });

            modelBuilder.Entity("BETesisProyectoFinal.Models.Empleados", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("Apellidos")
                        .IsRequired()
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<int>("DepartamentoID")
                        .HasColumnType("int");

                    b.Property<string>("Direccion")
                        .IsRequired()
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<DateTime>("FechaIngreso")
                        .HasColumnType("datetime(6)");

                    b.Property<string>("N_Cedula")
                        .IsRequired()
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<string>("Nombres")
                        .IsRequired()
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<int>("PlanillaID")
                        .HasColumnType("int");

                    b.Property<int>("SalarioBase")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("DepartamentoID");

                    b.HasIndex("PlanillaID");

                    b.ToTable("Empleados");
                });

            modelBuilder.Entity("BEProyectoFinal.Models.Usuarios", b =>
                {
                    b.HasOne("BEProyectoFinal.Models.Roles", "Roles")
                        .WithMany()
                        .HasForeignKey("RolID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("BETesisProyectoFinal.Models.Empleados", b =>
                {
                    b.HasOne("BEProyectoFinal.Models.Departamentos", "Departamentos")
                        .WithMany()
                        .HasForeignKey("DepartamentoID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("BEProyectoFinal.Models.TipoPlanillas", "TipoPlanillas")
                        .WithMany()
                        .HasForeignKey("PlanillaID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}
