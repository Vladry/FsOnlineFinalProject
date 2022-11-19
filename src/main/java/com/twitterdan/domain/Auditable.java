package com.twitterdan.domain;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.Column;
import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;
import java.time.LocalDate;

@Getter
@Setter
@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
public abstract class Auditable<T> {
  @CreatedBy
  @Column(name = "created_by")
  private T createdBy;

  @CreatedDate
  @Column(name = "created_at")
  private LocalDate createdAt;

  @LastModifiedBy
  @Column(name = "updated_by")
  private T updatedBy;

  @LastModifiedDate
  @Column(name = "updated_at")
  private LocalDate updatedAt;
}