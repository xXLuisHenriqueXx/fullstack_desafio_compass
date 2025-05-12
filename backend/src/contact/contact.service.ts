import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { Contact } from "./contact.entity";

import { CreateContactDTO } from "./dtos/create-contact.dto";
import { ContactDTO } from "./dtos/contact.dto";

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(Contact)
    private readonly contactRepository: Repository<Contact>
  ) {}

  getContactById(id: number): Promise<ContactDTO | null> {
    return this.contactRepository.findOneBy({ id });
  }

  createContact(createContactDTO: CreateContactDTO): Promise<ContactDTO> {
    const contact = this.contactRepository.create(createContactDTO);

    return this.contactRepository.save(contact);
  }

  async updateContact(
    id: number,
    attrs: Partial<Contact>
  ): Promise<ContactDTO> {
    const contact = await this.getContactById(id);
    if (!contact) throw new NotFoundException("Contact not found");

    Object.assign(contact, attrs);

    return this.contactRepository.save(contact);
  }

  async deleteContact(id: number): Promise<ContactDTO> {
    const contact = await this.getContactById(id);
    if (!contact) throw new NotFoundException("Contact not found");

    return this.contactRepository.remove(contact);
  }
}
