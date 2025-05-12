import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from "@nestjs/common";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";

import { ContactService } from "./contact.service";

import { ContactDTO } from "./dtos/contact.dto";
import { CreateContactDTO } from "./dtos/create-contact.dto";
import { UpdateContactDTO } from "./dtos/update-contact.dto";

@Controller("contact")
export class ContactController {
  constructor(private contactService: ContactService) {}

  @Get(":id")
  @ApiOperation({
    summary: "Return a contact who has the provided id",
  })
  @ApiResponse({
    status: 200,
    description: "Return a contact",
    type: ContactDTO,
  })
  @ApiResponse({
    status: 404,
    description: "Contact not found",
  })
  async getContactById(
    @Param("id", ParseIntPipe) id: number
  ): Promise<ContactDTO> {
    const contact = await this.contactService.getContactById(id);
    if (!contact) throw new NotFoundException("Contact not found");

    return contact;
  }

  @Post()
  @ApiOperation({
    summary: "Create a contact",
  })
  @ApiResponse({
    status: 201,
    description: "Return the created contact",
    type: ContactDTO,
  })
  async createContact(@Body() body: CreateContactDTO): Promise<ContactDTO> {
    const contact = await this.contactService.createContact(body);

    return contact;
  }

  @Patch(":id")
  @ApiOperation({
    summary: "Update the info from a contact who has the provided id",
  })
  @ApiResponse({
    status: 200,
    description: "Return the updated contact",
    type: ContactDTO,
  })
  updateContact(
    @Param("id", ParseIntPipe) id: number,
    @Body() body: UpdateContactDTO
  ): Promise<ContactDTO> {
    return this.contactService.updateContact(id, body);
  }

  @Delete(":id")
  @ApiOperation({
    summary: "Delete a contact who has the provided id",
  })
  @ApiResponse({
    status: 200,
    description: "Return the deleted contact",
    type: ContactDTO,
  })
  deleteContact(@Param("id", ParseIntPipe) id: number): Promise<ContactDTO> {
    return this.contactService.deleteContact(id);
  }
}
